

interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
}

const TeamMember = ({ name, role, avatar }: TeamMemberProps) => {
  return (
    <div className="glass-effect rounded-xl overflow-hidden animate-slide-up">
      <div className="aspect-square bg-amber-200 flex items-center justify-center">
        {/* Replace with actual team member image */}
        <p className="text-amber-700">{avatar}</p>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-amber-800">{name}</h3>
        <p className="text-amber-600">{role}</p>
      </div>
    </div>
  );
};

export const TeamSection = () => {
  // Team member data - you can adjust these names and roles
  const teamMembers = [
    { name: "Adam Nowak", role: "Game Designer", avatar: "Avatar 1" },
    { name: "Julia Kowalska", role: "Developer", avatar: "Avatar 2" },
    { name: "Mateusz Wiśniewski", role: "Art Director", avatar: "Avatar 3" },
    { name: "Aleksandra Dąbrowska", role: "UI/UX Designer", avatar: "Avatar 4" },
    { name: "Mike Brogowski", role: "Project Manager", avatar: "Avatar 5" }
  ];

  return (
    <section id="team" className="py-20 wood-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-amber-800 mb-4">
            Poznaj nasz zespół
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Grupa pasjonatów z WSPA Lublin, których łączy miłość do tworzenia gier
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              avatar={member.avatar}
            />
          ))}
        </div>

        <div className="mt-16 glass-effect rounded-xl p-8 max-w-3xl mx-auto text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-amber-800 mb-4">Nasza misja</h3>
          <p className="text-lg text-amber-700 mb-4">
            Jako studenci i absolwenci Wyższej Szkoły Przedsiębiorczości i Administracji w Lublinie,
            łączy nas pasja do tworzenia innowacyjnych doświadczeń w świecie gier. 
          </p>
          <p className="text-lg text-amber-700">
            Nasz zespół powstał dzięki wspólnym projektom na uczelni, 
            gdzie odkryliśmy, że razem możemy tworzyć wyjątkowe produkcje, 
            które łączą rozrywkę z edukacją i kulturowymi odniesieniami.
          </p>
        </div>
      </div>
    </section>
  );
};
