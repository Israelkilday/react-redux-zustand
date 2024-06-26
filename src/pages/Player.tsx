export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex flex-col gap-6 lg:w-[1100px]"></div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold lg:text-2xl">Fundamentos do Redux</h1>

          <span className="text-sm text-zinc-400">
            Módulo "Desvendando o Redux"
          </span>
        </div>
      </div>

      <main></main>
    </div>
  );
}

export default Player;
