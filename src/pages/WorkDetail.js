import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import CloseButtonImage from '../assets/images/btn_worksdetail_x.svg';

const Container = styled.article`
  margin-top: 120px;
`;

const WorkContainer = styled.section`
`;

const WorkImageContainer = styled.div`
  float:left;
  max-width: 1350px;
  max-height: 960px;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background-size: cover;  
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SideContainer = styled.aside`
  position: relative;
  float: left;
  width: 570px;
  height: 960px;
  padding-left: 70px;
  
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 23px;
  right: 48px;
  display: block;
  height: 51px;
  width: 50px;
  background: url(${CloseButtonImage}) no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  margin-top: 74px;
`;

const Title = styled.h1`
	color: #80C9F6;
	font-family: "Apple SD Gothic Neo", sans-serif;
	font-size: 52px;
	font-weight: 800;
	line-height: 63px;
`;

const Category = styled.h2`
	color: #97E055;
	font-family: "Apple SD Gothic Neo", sans-serif;
	font-size: 24px;
	font-weight: 800;
	line-height: 29px;
	margin-bottom: 13px;
`;

const Members = styled.ul`
  display: block;
  margin-top: 79px;
  margin-bottom: 109px;
`;

const Member = styled.li`
  display: block;
  margin-bottom: 15px;
`;

const Name = styled.span`
  color: #4A4A4A;
  font-family: "Apple SD Gothic Neo", sans-serif;
  font-size: 23px;
  font-weight: bold;
  margin-right: 30px;
`;

const Email = styled.span`
	color: #4A4A4A;
	font-family: "Apple SD Gothic Neo", sans-serif;
	font-size: 23px;
`;

const Line = styled.hr`
  display: inline-block;
  width: 432px;
  border: 1px solid #979797;
`;

const ExplanationBox = styled.div`
  width: 100%;
	height: 22px;
	color: #9B9B9B;
	font-family: "Apple SD Gothic Neo", sans-serif;
	font-size: 23px;
	font-weight: bold;
	line-height: 22px;
	text-align: justify;
  
  span.title {
    display: inline-block;
    padding-top: 39px;
    padding-bottom: 29px;
  }
  
  p {
    width: 432px;
    max-height: 395px;
    overflow: hidden;
    overflow-y: scroll;
  }
  
`;


class WorkDetail extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <WorkContainer>
            <WorkImageContainer>
              <WorkImage src="https://placehold.it/1350x5555" alt="work"/>
            </WorkImageContainer>
            <SideContainer>
              <CloseButton />
              <TitleBox>
                <Category>INTERACTIVE DESIGN</Category>
                <Title>작품제목</Title>
              </TitleBox>
              <Members>
                <Member>
                  <Name>김나연</Name>
                  <Email>nykim@gmail.com</Email>
                </Member>
                <Member>
                  <Name>김나연</Name>
                  <Email>nykim@gmail.com</Email>
                </Member>
              </Members>
              <Line/>
              <ExplanationBox>
                <span className="title">작품설명</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at atque deserunt dicta distinctio eaque hic id incidunt inventore itaque laborum molestiae, molestias neque odit officia provident quibusdam quidem quod recusandae sapiente sit soluta velit vero? Accusamus autem beatae consequuntur debitis delectus deserunt esse eveniet ex excepturi exercitationem facere magnam molestiae natus non, odit optio quae reiciendis repellat similique suscipit. Dolore, nesciunt, tempora? Aspernatur distinctio dolor expedita explicabo laudantium magni neque nihil, nulla omnis, optio provident quia voluptates? Beatae commodi dolor harum libero, omnis qui voluptatem. Accusantium aliquid autem eaque eveniet ipsum molestias nisi omnis possimus quos sint? Accusantium asperiores assumenda atque aut consequuntur, debitis delectus deserunt dolore doloremque, dolores doloribus eius enim eveniet fugiat harum hic illum incidunt labore maiores molestias natus nesciunt numquam odit omnis perspiciatis possimus quae quis quo tempora veritatis! Atque dicta enim est nisi possimus, repudiandae? Aliquid architecto asperiores, doloribus eligendi laboriosam neque quaerat quisquam repudiandae tempora tempore? Alias dicta dolorem iusto nobis quae quibusdam quis vitae! Atque autem earum error harum labore laborum magnam neque quam quod saepe, sed totam. Accusamus accusantium aliquam architecto cumque deserunt dignissimos doloribus dolorum eos et eum illo ipsam itaque iusto libero magnam molestiae molestias mollitia necessitatibus nemo nobis, numquam omnis placeat quae quam quas quidem quo repudiandae rerum unde voluptas? Asperiores consequuntur dolore dolorem esse, fugiat illo inventore ipsa laboriosam, perferendis recusandae rem repudiandae totam. Consequuntur culpa cumque illum in libero quasi quibusdam quis quod sit vitae! Aperiam, deleniti esse fuga fugit illo incidunt nihil perspiciatis quo recusandae repellat. Alias aliquam, blanditiis deleniti dolorum, eveniet excepturi, ipsa labore maiores minus mollitia numquam omnis perspiciatis provident quae quasi quod quos rerum temporibus. Deleniti dolorem est eum ipsam magni minima molestiae nam, numquam officiis reiciendis vitae voluptatibus. Blanditiis dignissimos eos ipsum officiis perspiciatis voluptatum. Ab, consectetur cumque earum facere inventore nam nobis reprehenderit! Accusantium ad autem cum ea impedit magnam nam nemo perspiciatis, possimus repellendus, reprehenderit soluta, voluptas. Aperiam architecto culpa ex id inventore laboriosam magnam modi officia pariatur quo, ratione voluptatem. At aut beatae consequatur corporis, deserunt doloremque ipsum itaque magnam, neque nisi non nostrum nulla, odit officia perspiciatis quo sed suscipit tenetur voluptas voluptatem? Alias animi culpa cumque deleniti ducimus et labore maxime natus neque quos reiciendis sapiente, sequi soluta. A architecto autem beatae consequatur delectus ea eius enim eum fuga hic inventore laborum modi natus officia pariatur praesentium quaerat quam quidem quisquam, quod rerum sapiente sequi sint tempora ullam ut veritatis. Eligendi expedita ipsam porro quam reprehenderit voluptas. Ducimus nisi vel veritatis. Assumenda at aut beatae consequatur culpa debitis, distinctio ea eum exercitationem facilis fugit hic, illo inventore itaque magnam minima nihil nisi obcaecati omnis praesentium provident quasi recusandae reiciendis repudiandae sint suscipit veniam vitae voluptas voluptate, voluptatibus? Asperiores aut cum dolorum expedita laboriosam magnam rem ut. Aperiam atque aut autem blanditiis culpa debitis distinctio dolor dolorem doloremque earum, eius expedita facere facilis harum minus molestiae mollitia nemo officia quaerat quia quos rem repudiandae sapiente sequi sint sunt vel veritatis vitae voluptas voluptatum. Dignissimos distinctio error minus nesciunt rem repellat, repudiandae similique voluptatum! Alias culpa delectus ea iure neque odio quidem! At excepturi iste necessitatibus pariatur porro quam quos suscipit. Ab amet animi aperiam architecto asperiores assumenda atque commodi ducimus eligendi, error est eum eveniet explicabo fuga fugit in maxime minus nam nemo nostrum pariatur porro quas quasi, quibusdam reiciendis repellat reprehenderit sapiente sequi sint sunt suscipit tenetur ut vel veniam vero vitae voluptates. Aliquid, assumenda cum dicta ducimus eaque eum illo, illum in, ipsam iusto laudantium mollitia optio recusandae sunt voluptate. Dolor doloremque dolorum ea facilis, id incidunt iusto laboriosam odio odit officiis porro provident quae, qui quos recusandae reprehenderit rerum sed soluta tempora tempore totam ullam ut? Aliquid, commodi debitis doloribus eius fugit ipsa rem. Ab aliquam animi aperiam aut cum cumque delectus distinctio dolores dolorum ducimus exercitationem harum illum itaque labore libero magnam minus modi molestiae necessitatibus nobis nostrum nulla numquam quae qui quo repellendus reprehenderit repudiandae rerum, similique sint, temporibus ut veritatis vero voluptas voluptates voluptatibus voluptatum. Adipisci assumenda at commodi cupiditate delectus doloribus ducimus earum eos et explicabo harum non obcaecati pariatur perspiciatis porro, possimus quibusdam ullam! Aliquam animi, consectetur dicta dignissimos eius enim ex fuga numquam obcaecati possimus provident quae sapiente temporibus vel velit. Culpa, cupiditate deleniti dignissimos eligendi esse expedita facere id, illum itaque iusto, magnam obcaecati officia ratione suscipit tempore temporibus ut! Alias aliquam asperiores at culpa cum debitis doloremque dolorum ducimus enim ex fuga fugit illo iure maxime modi nemo odit placeat qui reiciendis rem repellat, sunt velit vitae voluptates voluptatibus! Aliquid at atque beatae culpa dolorem dolorum eligendi et fuga id magnam, molestiae numquam quasi quia ratione suscipit, ut velit voluptatum! Deleniti deserunt fugit iusto magnam odio similique voluptates. Amet aspernatur autem consequuntur, culpa delectus dolor ducimus id incidunt ipsa iste itaque laborum libero nam nemo quae, rem tempora totam voluptatum. Ad doloremque excepturi illum nobis odio omnis, pariatur porro quasi sapiente tempore. Excepturi, harum, qui. Amet culpa cupiditate dolores earum molestias odit quod ut! Earum eos harum iste molestiae quo. Cupiditate dolorum neque pariatur ratione? Aspernatur autem, dicta distinctio eos exercitationem laborum laudantium quia ullam? Accusamus at autem deserunt dicta dignissimos dolorem ipsa laborum maiores minus quas quia, repellat repudiandae. Ab adipisci aperiam aut debitis delectus facilis fugiat id incidunt modi neque, omnis optio provident quam sed velit voluptas voluptatibus! Accusamus ea error est explicabo hic iure minus nam necessitatibus numquam pariatur quidem reiciendis rem sunt temporibus tenetur velit, vitae? Ab animi aspernatur consectetur consequatur doloremque error ullam voluptatum. Accusamus amet animi blanditiis cum deleniti deserunt dignissimos dolore ea eaque eos error, iure labore laudantium maiores minus natus neque nihil nisi, nulla porro quibusdam rem similique suscipit tenetur voluptatum? Adipisci alias asperiores atque aut autem consequuntur dicta dolore eaque enim facilis harum impedit inventore laborum maiores minima, modi, natus nesciunt nihil nisi odio officiis quae quibusdam reprehenderit, sequi tempore ut vel velit veniam vitae voluptas. Alias dicta est eveniet ex facilis iure magnam nemo nisi nobis temporibus. Ducimus harum laboriosam, maiores nihil repellat sapiente sed voluptatem?</p>
              </ExplanationBox>
            </SideContainer>
          </WorkContainer>
        </Container>
      </Fragment>
    );
  }
}

export default WorkDetail;
