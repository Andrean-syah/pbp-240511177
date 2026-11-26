export default function TodoStats({ todos }) {
  const selesai = todos.filter((todo) => todo.selesai).length;

  return (
    <p className="stats">
      Selesai: {selesai} dari {todos.length} tugas
    </p>
  );
}