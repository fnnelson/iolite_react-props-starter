
// properties are received by the title and when used will give the value that they are assigned
function Header({ title, subtitle }) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </>
    );
}

export default Header