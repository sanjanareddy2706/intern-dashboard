const form = document.getElementById("internForm");
const list = document.getElementById("internList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

const STORAGE_KEY = "internDashboardData";

function getInternsFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [
    {
      _id: "1",
      name: "Your Name",
      role: "Frontend Intern",
      referralCode: "yourname2025",
      donations: 5000,
      status: "Active"
    }
  ];
  try {
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

function saveInternsToStorage(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function getFilteredInterns() {
  const q = searchInput.value.trim().toLowerCase();
  let interns = getInternsFromStorage();

  if (q) {
    interns = interns.filter(i => i.name.toLowerCase().includes(q));
  }

  const sort = sortSelect.value;
  if (sort === "donationsDesc") {
    interns.sort((a, b) => b.donations - a.donations);
  } else if (sort === "donationsAsc") {
    interns.sort((a, b) => a.donations - b.donations);
  } else {
    interns.sort((a, b) => Number(b._id) - Number(a._id));
  }

  return interns;
}

function renderInterns() {
  const interns = getFilteredInterns();
  list.innerHTML = "";

  if (interns.length === 0) {
    list.innerHTML = "<li>No interns found.</li>";
    return;
  }

  interns.forEach(intern => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${intern.name}</strong>
      <small>${intern.role} • ${intern.status}</small>
      <div>Referral Code: ${intern.referralCode || "-"}</div>
      <div>Donations: ₹${intern.donations.toLocaleString()}</div>
      <button class="delete-btn" data-id="${intern._id}">Delete</button>
    `;

    const btn = li.querySelector(".delete-btn");
    btn.addEventListener("click", () => {
      deleteIntern(intern._id);
    });

    list.appendChild(li);
  });
}

function addIntern(intern) {
  const items = getInternsFromStorage();
  items.push(intern);
  saveInternsToStorage(items);
  renderInterns();
}

function deleteIntern(id) {
  let items = getInternsFromStorage();
  items = items.filter(i => i._id !== id);
  saveInternsToStorage(items);
  renderInterns();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const referralCode = document.getElementById("referralCode").value.trim();
  const donations = Number(document.getElementById("donations").value || 0);

  if (!name || !role) {
    alert("Name and role are required.");
    return;
  }

  addIntern({
    _id: String(Date.now()),
    name,
    role,
    referralCode,
    donations,
    status: "Active"
  });

  form.reset();
});

searchInput.addEventListener("input", renderInterns);
sortSelect.addEventListener("change", renderInterns);

// Initial load
renderInterns();