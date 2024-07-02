import React from 'react'
import './Posts.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';

export default function Posts() {
  return (
    <Container>
        <Row className='Posts'>
            <Col lg={9}>
                <h5 className='Post-title pt-3 ps-3'>دانلود فیلم inception</h5>
                <p className='Post-desc pt-3 ps-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <ul className='Post-data' style={{listStyle: 'none'}}>
                    <li style={{display: 'flex', justifyContent: 'space-around'}}>
                        <AccessTimeIcon/>
                        <span>
                             زمان: تستی           
                        </span>
                    </li>
                    <li style={{display: 'flex', justifyContent: 'space-around'}}>
                        <SubtitlesIcon/>
                        ژانر: تستی
                    </li>
                    <li style={{display: 'flex', justifyContent: 'space-around'}}>
                        <LanguageIcon/>
                        محصول: تستی
                    </li>
                    <li style={{display: 'flex', justifyContent: 'space-around'}}>
                        <img className='Imdb' src="assets/imdb.png" alt="" />
                        امتیاز: تستی
                    </li>
                </ul>
                    <Button style={{margin: '0 300px 10px 0'}} variant='warning'>
                        <Link to='/post/:id'>ادامه + دانلود</Link>
                    </Button>
            </Col>
            <Col lg={3}>
                <img className='Post-image w-100' src="assets/post.jfif" alt="" />
            </Col>
        </Row>
    </Container>
  )
}
