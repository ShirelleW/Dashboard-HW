class Boxes extends React.Component{

    render(){
        return(
            <div class= "wrapper">
            <div class = "gridSystem">
                <div class = "item1">
                    <div id = "db">
                    <span>Dashboard</span>
                    <span>Widget</span>
                    <span>Reviews</span>
                    <span>Customers</span>
                    <span>Online Analysis</span>
                    <span>Settings</span>
                    </div>
                </div>
                <div class = "item2">
                    <h4>Reviews</h4> 
                    <h2>1,281</h2>
                </div>
                <div class = "item3">
                    <h4>Average Ratings</h4>
                    <h2>4.6</h2>
                </div>
                <div class = "item4">
                    <h4>Sentiment Analysis</h4>
                    <h2>960</h2>
                    <h2>122</h2>
                    <h2>321</h2>
                </div>
                <div class = "item5">
                    <h4>Website Visitors</h4>
                    <h2>821</h2>
                    <div id = "random"></div>
                </div>
            </div>
            </div>
        )
    }
}

    
ReactDOM.render(
    <Boxes/>,
    document.querySelector("#container")
)