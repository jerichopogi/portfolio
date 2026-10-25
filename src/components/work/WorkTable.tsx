import { totalExperience, workRows } from '@/content/skills';

/** Experience as a dense table; the hovered row inverts, as the reference does. */
export const WorkTable = () => (
  <div className="mt-10 overflow-x-auto">
    <table className="w-full min-w-[40rem] border-collapse text-left">
      <caption className="sr-only">Work history</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Period</th>
          <th scope="col">Company</th>
          <th scope="col">Role and stack</th>
        </tr>
      </thead>
      <tbody>
        {workRows.map((row) => (
          <tr
            key={`${row.period}-${row.company}`}
            className="group border-t border-line transition-colors duration-[var(--duration-normal)] hover:bg-fill"
          >
            <td className="py-5 pr-6 align-top transition-colors duration-[var(--duration-normal)] group-hover:text-ink-invert">
              <span className="block">{row.period}</span>
              <span className="mono-label block transition-colors duration-[var(--duration-normal)] group-hover:text-ink-invert">
                {row.duration}
              </span>
            </td>
            <td className="py-5 pr-6 align-top transition-colors duration-[var(--duration-normal)] group-hover:text-ink-invert">
              {row.company}
            </td>
            <td className="py-5 align-top">
              <span className="mono-list transition-colors duration-[var(--duration-normal)] group-hover:text-ink-invert">
                {row.role} <span aria-hidden="true">|</span> {row.stack}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <p className="mt-8 text-right">
      <span className="mono-label block">Work experience</span>
      <span className="italic">{totalExperience}</span>
    </p>
  </div>
);
