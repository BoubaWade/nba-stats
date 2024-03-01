type TableHeaderProps = {
  datas: string[];
};
export default function TableHeader({ datas }: TableHeaderProps) {
  return (
    <thead>
      <tr>
        {datas.map((data, index) => (
          <th className={data} key={index}>
            {data}
          </th>
        ))}
      </tr>
    </thead>
  );
}
