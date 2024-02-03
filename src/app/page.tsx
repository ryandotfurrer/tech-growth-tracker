import TaskCard from "./components/TaskCard";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flow">
      <section className="flow">
        <h2 className="py-12 text-center">Tasks</h2>
        <TaskCard
          taskName="LinkedIn Posts"
          taskDescription="Schedule one post on LinkedIn per day. Blog posts can be summarized and linked to on LinkedIn."
        />
        <TaskCard
          taskName="X Posts"
          taskDescription="Schedule one to four posts on X per day. Blog posts can broken down into four tweets each."
        />
        <TaskCard
          taskName="Blog Post"
          taskDescription="Write one blog post per week."
        />
        <TaskCard
          taskName="Newsletter"
          taskDescription="Write one newsletter per week."
        />
      </section>
    </main>
  );
}
