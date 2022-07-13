import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findArticle, setArticle } from '../../redux/actions/index';
import NavBar from '../NavBar/navbar';
import styles from "./Blog.module.css";
import Footer from '../Footer/Footer';
import {
    ScrollContainer,
    Sticky,
    Animator,
    ScrollPage,
    Fade,
    MoveOut,
    FadeIn,
    ZoomIn,
    MoveIn,
    Zoom,
    Move
} from 'react-scroll-motion';

export default function Article(props) {
    const { id } = useParams();
    console.log("id", id)
    const dispatch = useDispatch()


    useEffect(() => {
        //dispatch(findArticle(props.match.params.id));
        dispatch(findArticle(id));
        return () => { dispatch(setArticle([])) };
    }, [dispatch])

    const article = useSelector((state) => state.article)
    console.log("article", article.contents)

    const Scrll0 = Fade(0, 1)
    const Scrll1 = FadeIn(0, 1)

    return (
        <div >
            {article.length === 0 ?
                <div className={styles.loading}>
                    <img src={"https://i.pinimg.com/originals/5c/dd/ad/5cddadeb5ed4d48a582cfeb328160826.gif"} /* width='200px' height='200px' */ />
                    <div><h1>Cargando...</h1></div>
                </div>
                :
                <div className={styles.containerDetail}>

                    <Link /* className={styles.btn} */ to='/blog'>
                        <button className={styles.btnBack}>Back</button>
                    </Link>
                    {/*  <div> <NavBar/></div> */}
                    <div className={styles.title}>
                        <h1>{article.name}</h1>
                    </div>
                    <div >
                        <ScrollContainer>
                            <ScrollPage page={0}>
                                <Animator animation={Scrll0}>
                                    <div>
                                        <img src={article.image} width='600px' />
                                        <h4>Released {article.createdAt.slice(0, 10)}</h4>
                                    </div>
                             
                                    <div className={styles.contents}>
                                        <p>{article.contents}</p>
                                    </div>
                                </Animator>
                            </ScrollPage>
                        </ScrollContainer>
                    </div>
                    <Footer />
                </div>
            }

        </div>
    )
}