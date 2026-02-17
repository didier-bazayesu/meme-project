export default function MordorMeme() {
    return (
        <section className="flex items-center justify-center min-h-screen -mt-32">
            <div className="relative inline-block">

                {/* Top Text */}
                <div
                    style={{
                        position: "absolute",
                        top: "12px",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        fontFamily: "Impact, Arial Black, sans-serif",
                        fontSize: "clamp(20px, 4vw, 36px)",
                        fontWeight: 900,
                        color: "white",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                        padding: "0 16px",
                        zIndex: 10,
                    }}
                >
                    One does not simply
                </div>

                {/* Meme Image */}
                <img
                    src="http://i.imgflip.com/1bij.jpg"
                    alt="One does not simply walk into Mordor"
                    style={{ display: "block", width: "500px", maxWidth: "100%", height: "auto" }}
                />

                {/* Bottom Text */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "12px",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        fontFamily: "Impact, Arial Black, sans-serif",
                        fontSize: "clamp(20px, 4vw, 36px)",
                        fontWeight: 900,
                        color: "white",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                        padding: "0 16px",
                        zIndex: 10,
                    }}
                >
                    Walk into Mordor
                </div>

            </div>
        </section>
    );
}