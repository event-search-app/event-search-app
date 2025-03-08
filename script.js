const events = [
  { name: "花火大会", date: "2025-07-20", location: "大阪" },
  { name: "フードフェス", date: "2025-08-10", location: "神戸" },
  { name: "音楽ライブ", date: "2025-09-15", location: "京都" }
];

function searchEvent() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const filteredEvents = events.filter(event => event.name.toLowerCase().includes(input));

  if (filteredEvents.length > 0) {
    filteredEvents.forEach(event => {
      resultDiv.innerHTML += `<div class="alert alert-success">
        <strong>${event.name}</strong><br>
        📅 ${event.date} | 📍 ${event.location}
      </div>`;
    });
  } else {
    resultDiv.innerHTML = `<div class="alert alert-warning">該当するイベントが見つかりません。</div>`;
  }
}
