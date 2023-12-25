interface dataType {
  header?: string;
  data: { name: string; Icon: JSX.Element }[];
}

const ListTemplate = ({ header, data }: dataType) => {
  return (
    <div className="text-[1.4rem] border-b border-[#444] pt-[1.4rem] px-[1.2rem] pb-[1rem]">
      {header && (
        <span className="text-[1.6rem] font-bold pl-[1.2rem]">{`${header}`}</span>
      )}
      <ul className="flex flex-col">
        {data.map((el) => {
          return (
            <li className="flex items-center gap-[2.2rem] rounded-[1rem] py-[0.8rem] px-[1.2rem] hover:cursor-pointer hover:bg-[#222]">
              {el.Icon}
              <span>{el.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListTemplate;
