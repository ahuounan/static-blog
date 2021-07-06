export function SkillsTable() {
  return (
    <table className="mx-auto table-auto border-separate">
      <tbody>
        <tr>
          <th colSpan={2}>
            <h4 className="text-lg font-semibold">Programming Languages</h4>
          </th>
          <th colSpan={2}>
            <h4 className="text-lg font-semibold">Frameworks</h4>
          </th>
          <th colSpan={2}>
            <h4 className="text-lg font-semibold">Languages</h4>
          </th>
        </tr>
        <tr>
          <td className="text-left pl-3 text-sm md:text-base">Typescript</td>
          <td>
            <meter className="w-10" max={10} min={0} value={8} />
          </td>
          <td className="text-left pl-3 text-sm md:text-base">React</td>
          <td>
            <meter className="w-10" max={10} min={0} value={8} />
          </td>
          <td className="text-left pl-3 text-sm md:text-base">English</td>
          <td>
            <meter className="w-10" max={10} min={0} value={10} />
          </td>
        </tr>
        <tr>
          <td className="text-left pl-3 text-sm md:text-base">Javascript</td>
          <td>
            <meter className="w-10" max={10} min={0} value={8} />
          </td>
          <td className="text-left pl-3 text-sm md:text-base">rxjs, redux</td>
          <td>
            <meter className="w-10" max={10} min={0} value={8} />
          </td>
          <td className="text-left pl-3 text-sm md:text-base">
            Mandarin Chinese
          </td>
          <td>
            <meter className="w-10" max={10} min={0} value={10} />
          </td>
        </tr>
        <tr>
          <td className="text-left pl-3 text-sm md:text-base">Python</td>
          <td>
            <meter className="w-10" max={10} min={0} value={5} />
          </td>
          <td className="text-left pl-3 text-sm md:text-base">Jest, Cypress</td>
          <td>
            <meter className="w-10" max={10} min={0} value={6} />
          </td>
          <td className="text-left pl-3 text-sm md:text-base">Spanish</td>
          <td>
            <meter className="w-10" max={10} min={0} value={3} />
          </td>
        </tr>
        <tr>
          <td className="text-left pl-3 text-sm md:text-base">C/C++</td>
          <td>
            <meter className="w-10" max={10} min={0} value={2} />
          </td>
          <td className="text-left pl-3 text-sm md:text-base">git</td>
          <td>
            <meter className="w-10" max={10} min={0} value={5} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
