export function buildDestination(search) {
  const params = new URLSearchParams(search);
  const placeId = params.get("placeId") || "";
  const gameInstanceId = params.get("gameInstanceId") || "";
  if (params.getAll("placeId").length !== 1 || !/^[1-9][0-9]*$/.test(placeId)) {
    throw new Error("This invite has an invalid place ID. Open a new link from the watcher alert.");
  }
  if (params.getAll("gameInstanceId").length !== 1 ||
      !/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(gameInstanceId)) {
    throw new Error("This invite has an invalid server ID. Open a new link from the watcher alert.");
  }
  const instance = gameInstanceId.toLowerCase();
  const query = new URLSearchParams({ placeId, gameInstanceId: instance });
  return {
    placeId,
    gameInstanceId: instance,
    nativeUrl: `roblox://${query}`,
    gameUrl: `https://www.roblox.com/games/${placeId}`,
  };
}
