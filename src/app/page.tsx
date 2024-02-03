import TaskCard from "./components/TaskCard";

export default function Home() {
  return (
    <main className="flow">
      <section className="flow">
        <h2>Tasks</h2>
        <TaskCard
          taskName="LinkedIn Posts"
          taskDescription="Schedule one post on LinkedIn per day. Blog posts can be summarized and linked to on LinkedIn."
        />
        <TaskCard
          taskName="X Posts"
          taskDescription="Schedule four posts on X per day. Blog posts can become four tweets."
        />
      </section>
    </main>
  );
}
