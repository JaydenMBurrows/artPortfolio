function Header() {
const styles = {
            header: {
                fontFamily: "Cousine",
                textAlign: "center",
            },
            smallerHeader: {
                fontFamily: "Cutive Mono",
                textAlign: "center",
                color: "#36454F",
            },
            navbar: {
                display: "flex",
                justifyContent: "center"
            },
            ul: {
                listStyleType: "none",
                margin: "0",
                padding: 0,
                overflow: "hidden",
                textAlign: "center",
            },
            li: {
                display: "inline",
                float: "left",
                margin: "0 4vw",
            },
            listLink: {
                fontFamily: "Cutive Mono",
                display: "block",
                padding: "8px",
                borderWidth: "3px",
                border: "solid",
                borderColor: "#36454F",
                borderRadius: "3px",
                textAlign: "center",
                color: "#36454F",
                textDecoration: "none",
                }
        }
    return(   
        <header>
            <h1 style={styles.header}> Jayden Burrows </h1>
            <h2 style={styles.smallerHeader}> Portfolio </h2>
            <nav style={styles.navbar}> 
                <ul style={styles.ul}>
                    <li style={styles.li}> <a style={styles.listLink} href="#Traditional"> Traditional </a> </li>
                    <li style={styles.li}> <a style={styles.listLink} href="#Digital"> Digital </a> </li>
                    <li style={styles.li}> <a style={styles.listLink} href="#Photography"> Photography </a> </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header