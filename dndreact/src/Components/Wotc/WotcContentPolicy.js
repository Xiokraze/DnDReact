import Card from "../UI/Card";

const WotcContentPolicy = () => {
  return (
    <div className="test">
      <Card>
        <p>
          This project is unofficial Fan Content permitted under the Fan Content
          Policy. Not approved/endorsed by Wizards. Portions of the materials
          used are property of Wizards of the Coast. ©Wizards of the Coast LLC.
        </p>
        <a
          href="https://company.wizards.com/en/legal/fancontentpolicy"
          target="_blank"
          rel="noreferrer"
        >
          Visit Wizards Policy
        </a>
      </Card>
    </div>
  );
};

export default WotcContentPolicy;
