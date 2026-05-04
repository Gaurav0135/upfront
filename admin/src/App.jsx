import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, PlusCircle, Upload, X, Trash2, Edit } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

const initialPortfolio = {
  title: "",
  category: "",
  description: "",
  imageFile: null,
  imagePreview: null,
  imageName: "",
  projectUrl: ""
};

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [portfolio, setPortfolio] = useState(initialPortfolio);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const fileInputRef = useRef(null);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API_BASE}/contacts`);
      const data = await response.json();
      setContacts(data.data || []);
    } catch (error) {
      console.error("Failed to load contacts", error);
    }
  };

  const fetchPortfolioItems = async () => {
    try {
      const res = await fetch(`${API_BASE}/portfolio`);
      const data = await res.json();
      setPortfolioItems(data.data || []);
    } catch (err) {
      console.error("Failed to load portfolio items", err);
    }
  };

  useEffect(() => {
    fetchContacts();
    fetchPortfolioItems();
  }, []);

  const onPortfolioChange = (event) => {
    const { name, value } = event.target;
    setPortfolio((prev) => ({ ...prev, [name]: value }));
  };

  const onImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log('Selected file:', file.name, file.type, file.size);

    if (file.size > 10 * 1024 * 1024) {
      setMessage("Image size must be less than 10MB");
      setMessageType("error");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setMessage("Please upload a valid image file");
      setMessageType("error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setPortfolio((prev) => ({
        ...prev,
        imageFile: file,
        imagePreview: e.target?.result
        ,imageName: file.name
      }));
    };
    reader.readAsDataURL(file);
    setMessage("");
  };

  const clearImage = () => {
    setPortfolio((prev) => ({
      ...prev,
      imageFile: null,
      imagePreview: null
    ,imageName: ""
    }));
  };
  const onAddPortfolio = async (event) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      if (!portfolio.title || !portfolio.category || !portfolio.description) {
        throw new Error("Please fill all required fields (title, category, description)");
      }
      if (!editingId && !portfolio.imageFile) {
        throw new Error("Please select an image");
      }
      if (editingId && !portfolio.imageFile && !portfolio.imagePreview) {
        throw new Error("Please select an image");
      }

      const formData = new FormData();
      formData.append("title", portfolio.title);
      formData.append("category", portfolio.category);
      formData.append("description", portfolio.description);
      // Only append image if a new one is selected
      if (portfolio.imageFile) {
        formData.append("image", portfolio.imageFile);
      }
      // Always send projectUrl (even if empty) to allow clearing it
      const projectUrl = portfolio.projectUrl.trim();
      if (projectUrl) {
        const hasProto = /^https?:\/\//i.test(projectUrl);
        formData.append("projectUrl", hasProto ? projectUrl : `https://${projectUrl}`);
      } else {
        formData.append("projectUrl", ""); // Empty string to clear URL in database
      }

      const url = editingId ? `${API_BASE}/portfolio/${editingId}` : `${API_BASE}/portfolio`;
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add portfolio item");
      }

      setMessage(editingId ? "Portfolio item updated successfully." : "Portfolio item added successfully.");
      setPortfolio(initialPortfolio);
      setEditingId(null);
      fetchPortfolioItems();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  };

  const onEditPortfolio = (item) => {
    setEditingId(item._id);
    setPortfolio({
      title: item.title || "",
      category: item.category || "",
      description: item.description || "",
      imageFile: null,
      imagePreview: item.imageUrl || null,
      imageName: "",
      projectUrl: item.projectUrl || ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onDeletePortfolio = async (id) => {
    if (!window.confirm("Are you sure you want to delete this portfolio item?")) return;
    try {
      const res = await fetch(`${API_BASE}/portfolio/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to delete item");
      setMessage("Portfolio item deleted.");
      fetchPortfolioItems();
    } catch (err) {
      setMessage(err.message);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setPortfolio(initialPortfolio);
  };

  return (
    <>
      <Helmet>
        <title>Upfront Admin Dashboard</title>
      </Helmet>

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 rounded-2xl border border-slate-700 bg-slate-900/75 p-6">
          <h1 className="font-display text-2xl font-semibold text-white sm:text-3xl">Upfront Admin Dashboard</h1>
          <p className="mt-2 text-sm text-slate-300">Manage incoming contacts and portfolio content.</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-700 bg-slate-900/75 p-6">
            <div className="mb-5 flex items-center gap-2">
              <Mail size={18} className="text-sky-300" />
              <h2 className="font-display text-xl font-semibold text-white">Recent Contacts</h2>
            </div>

            <div className="max-h-[450px] space-y-4 overflow-y-auto pr-2">
              {contacts.length === 0 ? (
                <p className="text-sm text-slate-400">No contact submissions yet.</p>
              ) : (
                contacts.map((contact) => (
                  <div key={contact._id} className="rounded-xl border border-slate-700 p-4">
                    <p className="font-medium text-white">{contact.name}</p>
                    <p className="mt-1 text-sm text-sky-300">{contact.email}</p>
                    <p className="mt-2 text-sm text-slate-300">{contact.message}</p>
                  </div>
                ))
              )}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900/75 p-6">
            <div className="mb-5 flex items-center gap-2">
              <PlusCircle size={18} className="text-sky-300" />
              <h2 className="font-display text-xl font-semibold text-white">Add Portfolio Item</h2>
            </div>

            <form onSubmit={onAddPortfolio} className="space-y-4">
              <input
                name="title"
                placeholder="Title"
                value={portfolio.title}
                onChange={onPortfolioChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm"
              />
              <input
                name="category"
                placeholder="Category"
                value={portfolio.category}
                onChange={onPortfolioChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm"
              />
              <textarea
                name="description"
                rows="3"
                placeholder="Description"
                value={portfolio.description}
                onChange={onPortfolioChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm"
              />
              <div className="space-y-3">
                <>
                  {portfolio.imagePreview ? (
                    <>
                      <div className="relative rounded-lg overflow-hidden border border-slate-700">
                        <img
                          src={portfolio.imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 flex items-start justify-end p-2">
                          <button
                            type="button"
                            onClick={clearImage}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-slate-300">Selected: {portfolio.imageName}</p>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-sm text-sky-300 underline"
                        >
                          Change Image
                        </button>
                      </div>
                    </>
                  ) : (
                    <div
                      role="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-dashed border-slate-700 bg-slate-950/50 px-4 py-8 cursor-pointer hover:border-sky-400 hover:bg-slate-950 transition"
                    >
                      <Upload size={20} className="text-slate-400" />
                      <div className="text-center">
                        <p className="text-sm font-medium text-white">Click to upload image</p>
                        <p className="text-xs text-slate-400">PNG, JPG, WebP (Max 10MB)</p>
                      </div>
                    </div>
                  )}

                  {/* Hidden file input always present */}
                  <input
                    ref={fileInputRef}
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={onImageChange}
                    required={!editingId && !portfolio.imagePreview}
                    className="hidden"
                  />
                </>
              </div>
              <input
                name="projectUrl"
                placeholder="Project URL (optional) - Default: https://www.upfront.com"
                value={portfolio.projectUrl}
                onChange={onPortfolioChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm"
              />
              <div className="flex gap-3">
                <button
                type="submit"
                disabled={saving}
                className="flex-1 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:opacity-70"
              >
                {saving ? "Saving..." : editingId ? "Update Portfolio" : "Add Portfolio"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="rounded-full border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 hover:bg-slate-800"
                >
                  Cancel
                </button>
              )}
              </div>
              {message && (
                <p className={`text-sm ${messageType === "success" ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </p>
              )}
            </form>
          </article>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 font-display text-xl font-semibold text-white">Portfolio Items</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.length === 0 ? (
              <p className="text-sm text-slate-400">No portfolio items yet.</p>
            ) : (
              portfolioItems.map((item) => (
                <div key={item._id} className="rounded-xl border border-slate-700 bg-slate-900/75 p-4">
                  <div className="relative mb-3">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover rounded-md" />
                  </div>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.category}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => onEditPortfolio(item)}
                      className="rounded-md bg-slate-800 px-3 py-2 text-sm text-sky-300 hover:bg-slate-700 flex items-center gap-2"
                    >
                      <Edit size={16} /> Edit
                    </button>
                    <button
                      onClick={() => onDeletePortfolio(item._id)}
                      className="rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700 flex items-center gap-2"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
