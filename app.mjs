import { buildDestination } from "./destination.mjs";

const element = id => document.getElementById(id);
const status = element("status");
try {
  const target = buildDestination(window.location.search);
  element("description").textContent = "Launch Roblox directly into the server captured in your alert.";
  element("place").textContent = target.placeId;
  element("instance").textContent = target.gameInstanceId;
  element("native-link").value = target.nativeUrl;
  element("open").href = target.nativeUrl;
  element("game").href = target.gameUrl;
  for (const id of ["destination", "open", "game", "copy", "manual"]) element(id).hidden = false;
  element("open").addEventListener("click", () => {
    status.textContent = "Allow your browser to open Roblox. If nothing happens, copy the launch link and open it manually.";
  });
  element("copy").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(target.nativeUrl);
      status.textContent = "Launch link copied.";
    } catch {
      element("native-link").focus();
      element("native-link").select();
      status.textContent = "Select and copy the launch link shown above.";
    }
  });
} catch (error) {
  element("title").textContent = "Open a server invite.";
  status.textContent = error.message;
  const params = new URLSearchParams(window.location.search);
  const placeId = params.get("placeId") || "";
  if (params.getAll("placeId").length === 1 && /^[1-9][0-9]*$/.test(placeId)) {
    element("game").href = `https://www.roblox.com/games/${placeId}`;
    element("game").hidden = false;
  }
}
