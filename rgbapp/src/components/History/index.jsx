import "./style.css";

function History({ data, backgroundColor }) {
    return (
        <>
        <section>
            <h3>Histórico de cores geradas:</h3>
            <ul>
                {data.map((rgb) => (
                    <><div
                        className="small-preview"
                        style={{
                            backgroundColor: backgroundColor(...rgb),
                        }}
                    ></div><li key={rgb.join()}>{rgb.join()}</li></>
                ))}
            </ul>
        </section>
    </>
    );
}

export default History;