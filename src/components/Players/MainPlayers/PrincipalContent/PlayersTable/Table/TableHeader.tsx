export default function TableHeader() {
  const headerItems = [
    "Nom",
    "Prénom",
    "Position",
    "Équipe",
    "Conférence",
    "Division",
  ];
  return (
    <thead>
      <tr>
        {headerItems.map((item, index) => (
          <th className={item} key={index}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}
