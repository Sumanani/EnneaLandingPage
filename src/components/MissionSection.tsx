const MissionSection = () => {
  return (
    <div className="flex justify-center my-8 md:my-12">
      <div className="container max-w-[1240px]">
        <div>
          <h2 className="heading-primary">Ennea Solution</h2>
          <p className="text-lg">
            Ennea Solutions is a diverse company where talent is combined with
            experience to drive our business forward. It is helmed by founding
            members an advisory team commanding extensive industry experience.
            The core team comprises of dynamic individuals with passion and
            dedication and are instrumental in developing the status and profile
            of the company as a reputable pharmaceutical technology player.
          </p>
        </div>
        <div className="md:mt-10 grid grid-cols-1 md:grid-cols-2 place-items-start md:gap-10 lg:gap-40">
          <div>
            <h2 className="heading-primary">Our Mission</h2>
            <p className="text-lg">
              Integration of multiple technologies to ease out the process of
              order management, field force management, financial and logistics
              management by bringing all stakeholders to a single platform.
            </p>
          </div>
          <div>
            <h2 className="heading-primary">Our Vision</h2>
            <p className="text-lg">
              Adding value to businesses through digital transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
