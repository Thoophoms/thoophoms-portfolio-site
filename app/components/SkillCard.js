const SkillCard = ({ icon, name }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105 hover:shadow-xl">
            <div className="text-5xl">
                {icon}
            </div>

            <p className="font-semibold text-lg">
                {name}
            </p>
        </div>
    );
};

export default SkillCard;