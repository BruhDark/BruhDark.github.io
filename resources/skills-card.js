export function SkillsCard({image, title, description}) {
    return ( 
    <div className="ml-10">
        <span className="flex justify-center h-12 w-12">
          <img
            src={image ? image: "/images/gears.png"}
            alt="Skill image"
            className="bg-black bg-opacity-50 rounded p-3"
          />
        </span>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-white">{title ? title: "A skill"}</h3>
          <p className="mt-2 text-base text-white">
            {description ? description: "A description"}
          </p>
    </div>
    </div>);
}