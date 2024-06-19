export function HangmanDrawing(){
    return (
      <div style={{ position: "relative" }}>
        {/* indiv lines for the hang man */}
        <div
          style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 0
          }}
        />
        <div
          style={{
            height: "10px",
            width: "120px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div
          style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div
          style={{ height: "10px", width: "250px", background: "black" }}
        ></div>
      </div>
    );
}