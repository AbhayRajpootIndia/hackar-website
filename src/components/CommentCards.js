import React from "react"
import Card from "./Card"
import IntroImage from "../images/intro-1.png"

export default function CommentCards(props) {

    const allComments = ["3rd Rank on Twitter's Bug bounty program in World (1st in India) 2014- 2020",
                        "4th Rank on Uber's Bug Bounty in the world (1st in India) 2016- 2020",
                        "Top 3 rank on Facebook's Hacker's List in the world (2014-2017)",
                        "YourStory Top 30 promising Startups of India 2017",
                        "Recognized as leader in cyber security by the top companies and news agencies."]

    const size = allComments.length

    const [index, setIndex] = React.useState(0)

    const [currentComments, setCurrentCommments] = React.useState(allComments.slice(index, index + 3))

    const nextCard = () => {
        setIndex((index + 1) % size)
    }

    const previousCard = () => {
        setIndex((index + size - 1) % size)
    }

    React.useEffect(
        function () {
            setCurrentCommments([allComments[index], allComments[(index + 1) % size], allComments[(index + 2) % size]])
            console.log(currentComments)
        },
        [index]
    )


    const contentClass = "page-content"
    const cardStyle = props.pageView === 'mob' ? {width: '84%', borderWidth: '1px', borderRadius: '20px', borderStyle: 'solid', margin: '0px'} : {borderRadius: '20px', borderWidth: '1px',borderStyle: 'solid', margin: '0.5%'}

    return (
        <div className="widgets" style={{display: 'inline'}}>
            <div className="cards-display">

                <button className="cards-display-button-backward" onClick={previousCard}>  </button>

                {props.pageView === 'web' && <Card styles={{...cardStyle, height:'75px', width: '50%', filter: 'blur(3px)'}} 
                    fontStyle={{description: {fontSize: '90%'}}}
                    description = {currentComments[0]} onClick={previousCard} />}

                <Card styles={{...cardStyle, height:'150px', width: '90%'}} 
                    description = {currentComments[1]} />

                {props.pageView === 'web' && <Card styles={{...cardStyle, height:'75px', width: '50%', filter: 'blur(3px)'}} 
                    fontStyle={{description: {fontSize: '90%'}}}
                    description = {currentComments[2]} onClick={nextCard} />
}
                <button className="cards-display-button-forward" onClick={nextCard}>  </button>

            </div>
            
        </div>
    )
}   

// style={{display: props.pageView === 'mob'? 'inline': 'grid'}}