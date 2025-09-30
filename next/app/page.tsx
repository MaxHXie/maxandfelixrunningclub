import { runs } from "@/data/runs";
import type { Run } from "@/data/runs";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Max and Felix running club</h1>
        <p>
          Welcome! We run together once per week on Tuesdays at Stockholm
          Stadion. All paces are welcome.
        </p>
        <p>
          Meeting point: Stockholm Stadion — see on{" "}
          <a
            href="https://www.google.com/maps/place/Stockholm+Olympic+Stadium/@59.3453363,18.0741469,16z/data=!3m1!4b1!4m6!3m5!1s0x465f9d46987f203b:0x84fb387fe43d367d!8m2!3d59.3453364!4d18.0790178!16zL20vMDZxcTV5?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            Google Maps
          </a>
          . IMPORTANT! You can normally get into Stadion from the side entrance
          located on the north east corner.
        </p>
        <p>Time: 17:30 (we warmup for 15 minutes and aim to finish at 18:15)</p>
        <p>Bring your running shoes and a good mood. See you on Tuesday!</p>
      </header>

      <section>
        <h2>Past runs</h2>
        {runs.length === 0 ? (
          <p>No runs listed yet.</p>
        ) : (
          <ul>
            {runs.map((run: Run, index: number) => (
              <li key={index}>
                <article>
                  <h3>{run.date}</h3>
                  {run.note ? <p>{run.note}</p> : null}
                  {run.image ? (
                    <figure>
                      <img
                        src={run.image}
                        alt={run.alt ?? `Run on ${run.date}`}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "400px",
                        }}
                        loading="lazy"
                      />
                      {run.caption ? (
                        <figcaption>{run.caption}</figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
