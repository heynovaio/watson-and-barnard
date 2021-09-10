import React from "react"
import Layout from "../../components/layout"
import Feed from "../../components/feed"
import Header from "../../components/header"
import { Link } from "gatsby"

import * as sty from "../../components/services/styling"
import DetPic from "../../components/services/images/topographic-survey"
import ProjPic from "../../components/services/images/temp"
import survey from "../../images/tripod.svg"

const render = () => (
  <Layout>
    <Header page='settlement'/>
    <sty.Wrapper>


      <sty.Hero>
        <sty.Green/>
        <sty.Content>
          <h4><Link to="../">Services</Link> > <span>Topographic Survey</span></h4>
          <h1>Topographic Survey</h1>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit</p>
        </sty.Content>
      </sty.Hero>


      <sty.OuterContainer>
        <sty.Overview>
          <div>
            <h2>Overview</h2>
            <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor</p>
          </div>
          <img src={survey}  alt=""/>
        </sty.Overview>
      </sty.OuterContainer>


      <sty.Details>
        <sty.Blue/>
        <sty.InnerContainer>
          <ul>
            <li>
              <h3>Detail 1</h3>
              <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea</p>
            </li>
            <li>
              <h3>Detail 2</h3>
              <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea</p>
            </li>
            <li>
              <h3>Detail 3</h3>
              <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea</p>
            </li>
          </ul>
          <div>
            <DetPic/>
          </div>
        </sty.InnerContainer>
      </sty.Details>


      <sty.OuterContainer>
        <sty.Applications>
          <sty.Copy>
            <h2>Applications</h2>
            <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt</p>
            <sty.CTA>See what you need</sty.CTA>
          </sty.Copy>
          <ul>
            <li>Example of use  1 </li>
            <li>Example of use  2 </li>
            <li>Example of use  3 </li>
            <li>Example of use  4 </li>
            <li>Example of use  5 </li>
            <li>Example of use  6 </li>
            <li>Example of use  7 </li>
          </ul>
        </sty.Applications>


        <sty.Projects>
          <h2>Related Projects</h2>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing</p>
          <sty.CardRow>
            <div>
              <ProjPic/>
              <h3>Project Name</h3>
              <p>Lorem quis sunt magna dolor consectetur aliqua officia</p>
            </div>
            <div>
              <ProjPic/>
              <h3>Project Name</h3>
              <p>Lorem quis sunt magna dolor consectetur aliqua officia</p>
            </div>
            <div>
              <ProjPic/>
              <h3>Project Name</h3>
              <p>Lorem quis sunt magna dolor consectetur aliqua officia</p>
            </div>
          </sty.CardRow>
        </sty.Projects>


      </sty.OuterContainer>
    </sty.Wrapper>
    <Feed/>
  </Layout>
)

export default render
