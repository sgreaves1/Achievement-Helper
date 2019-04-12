import React from "react";
import './LastPlayedInfo.css'
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export class LastPlayedInfo extends React.Component {
    render() {
        return(
            <div class="xbox-last-played-info-box container-fluid">
                <div class="xbox-last-played-info-row-1">
                    {this.props.LastPlayedGame.name}
                </div>

                <div class="xbox-last-played-info-row-2">
                    <div class="xbox-last-played-info-col-1">
                        {this.props.LastPlayedGame.achievement.currentGamerscore}/{this.props.LastPlayedGame.achievement.totalGamerscore}
                    </div>
                    <div className="xbox-last-played-info-col-2">
                        <div/>
                        <img class="xbox-trophy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAMAAAC0CkrjAAADAFBMVEUAAAB8e3wlYqEle8VKe6F8e4R8gnxusOJuu+l1wvCodDS+bTS+ezSEbViSe1+odELFezS+qXzFgjTFgkLFjULMjULMjUrMlErTm1jTom6oqaivsKivsK+ZtMyotMyhu9Ovu+KExvCEzfCEzfiLzfCLzfiZxuKS0fiZ0fC+wsW+wtO+7f/itITwxoTizbbizb7/4q//7b7FwsXFxsXF4vjF7f/F+P/T8f/i0cXp0cX438Xw3+Lp4sX/8cX/+MX/+Mz/+8z/+9Pi4uLp4uLi///p///w7f//+OLw+P/w////+/D///D4//////j///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqkrbDAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAAAlwSFlzAAAWJAAAFiQBmxXGFAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS40E0BoxAAAAS5JREFUOE+tk1VyxDAQRMPMzBtmZnKYnM32/W8zGQ3Ysl1JVaryvlr91lpJtproV1x3NMe0W+t6BUUetHa9abXzqHXQqTbXM3PK7KIWGI31iD3AWDPh+uZLBk7eiE6ou6S9EX1HSyXtzT/o5O9PL/u+z4HerpI+olfUObFeBT55pwWNN+CeE2v+oZ2Ro6fGc4tukeG4GEHG0yEFTVT7ACYlCSkal5pUUytwqInpBPYsmg7zDVkMaxmz6HoDqPdovMi/hkzTC69mv59ont8k+qzMtS5fkUULmSY6Nfk+aAUTaaIFnuFgwAZCQdOOHHSE6baTY2abp77aCmlYa9dr+rcZpWvA77tAonWkdzUFKpov0ZSmQBpfIqIzmzJGtyCaP6cKjVyvPz9VuM31TxB9A6EOwlsFRTYqAAAAAElFTkSuQmCC"/>
                        {this.props.LastPlayedGame.achievement.currentAchievements}
                    </div>

                </div>

                <div class="xbox-last-played-info-row-3">

                    <div>
                        {this.props.LastPlayedGame.achievement.progressPercentage}%
                    </div>
                </div>

                <div class="xbox-last-played-info-row-4">
                    <ProgressBar percent={this.props.LastPlayedGame.achievement.progressPercentage} filledBackground="linear-gradient(to right, #adff2f, #008000)" />
                </div>

            </div>
        )
    }
}