type TeamMemberProps = {
  name: string;
  role: string;
};

const TeamMember = ({ name, role }: TeamMemberProps) => (
  <div className="glass-effect rounded-xl p-6 text-center animate-slide-up">
    <h3 className="text-xl font-bold text-amber-800 mb-1">{name}</h3>
    <p className="text-amber-600">{role}</p>
  </div>
);

export const TeamSection = () => {
  const teamMembers: TeamMemberProps[] = [
    { name: 'Alicja', role: 'Project Manager' },
    { name: 'Dana', role: 'Designer' },
    { name: 'Przemysław', role: 'Level designer' },
    { name: 'Nikita', role: 'Developer' },
    { name: 'Max', role: 'Developer' },
    { name: 'Viktoria', role: 'Grafika' },
    { name: 'Veronika', role: 'Audio' },
    { name: 'Hanna', role: 'Grafika' },
    { name: 'Mateusz', role: 'Blender Expert' },
    { name: 'Kasia', role: 'Grafika' },
    { name: 'Mike Brogowski', role: 'Patron drużyny' },
    { name: 'Robert Miedziocha', role: 'Patron drużyny' },
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
