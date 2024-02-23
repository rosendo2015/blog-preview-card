import { Button } from '../../components/Button'
import { CardContainer, HomeContainer } from './styles'
import imgArticle from '../../assets/illustration-article.svg'
import imgAutor from '../../assets/image-avatar.webp'

export function Home() {

  return (
    <HomeContainer>
      <CardContainer>
        <img src={imgArticle} alt="" />
        <Button title="Learning"></Button>
        <span>
          Published 21 Dec 2023
        </span>
        <h1>
          HTML & CSS foundations
        </h1>
        <p>
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className='wrapperAvatar'>
          <img className='avatar' src={imgAutor} alt="" />
          <strong>
            Greg Hooper
          </strong>
        </div>


      </CardContainer>
    </HomeContainer>
  )
}
