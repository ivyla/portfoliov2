import "../fonts.css"
import "../SharedStyles.css"
import schwab from "../images/schwab.png"
import tech4good from "../images/smile-small.png"
// import salesforce from "../images/sf2.svg"
import readlee from "../images/readlee.png"
import csa from "../images/csa.jpg"
import rad from "../images/rad.png"
let images = [schwab, readlee, rad, tech4good, csa]

const tile = {
    maxWidth: "30%",
    marginBottom: "20px"
}

const companyLogo = {
    height: "15vmin",
    // margin: "0 auto",
    // width: "25vmin",
    pointerEvents: "none"
}

let ExperienceTile = ({
    role,
    company,
    companyLink,
    roleDesc,
    date,
    imageIndex
}) => {
    const thirdBullet = roleDesc[2] == null ? {display: "none"} : null
    return (
        <div style={tile}>
            <img src={images[imageIndex]} style={companyLogo} alt="logo" />
            <b>
                <p>
                    {role} @{" "}
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickableLink"
                    >
                        {company}
                    </a>
                </p>
            </b>
            <p className="smallText"> {date} </p>
            <ul>
                <li> {roleDesc[0]} </li>
                <li> {roleDesc[1]} </li>
                <li style={thirdBullet}> {roleDesc[2]} </li>
            </ul>
            {/* <p> {roleDesc[0]} </p> */}
        </div>
    )
}
export default ExperienceTile
