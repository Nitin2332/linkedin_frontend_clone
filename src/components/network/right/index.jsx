import GameCard from "../../gameCard";
import GrowCard from "../../growCard";
import GrowConnectionCard from "../../growConnections";
import InvitationCard from "../../invitationCard";

function Right() {
  return (
    <>
      {" "}
      <div>
        <GrowCard />
        <InvitationCard />
        <GameCard />
        <GrowConnectionCard />
      </div>
    </>
  );
}

export default Right;
