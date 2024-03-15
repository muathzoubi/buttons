const mainLayoutStyle: React.CSSProperties = {
  width: '100vw',
  height: '100%',
  borderLeft: '1px  rgba(0, 0, 0, 1) solid',
};
const MainLayout2 = () => {
  return (
    <div style={mainLayoutStyle}>
      <button className="testbutton">Button</button>
      <button className="testbutton4">Button</button>
    </div>
  );
};
export default MainLayout2;
