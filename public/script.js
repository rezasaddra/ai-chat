async function send() {
  const input = document.getElementById("input");
  const chatBox = document.getElementById("chatBox");

  const message = input.value;
  if (!message) return;

  chatBox.innerHTML += `<div class="msg user">You: ${message}</div>`;
  input.value = "";

  const res = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();

  chatBox.innerHTML += `<div class="msg ai">AI: ${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
