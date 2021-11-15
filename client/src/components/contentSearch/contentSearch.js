import './contentSearch.scss'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { positions } from '@mui/system';

const ContentSearch = (props) => {

    const { data } = props

    console.log(data)

    return (
        <div className="content-search">
            {data.map((elt) => (
                <div className="content-search-card">
                    <h2>{elt.track.name}</h2>
                    <img src={elt.track.album.images[0].url}></img>
                </div>
            ))}
        </div>
        // <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
        //     <ImageList variant="masonry" cols={2} gap={10}>
        //         {data.map((elt) => (
        //             <ImageListItem key={elt.id}>
        //                 <h1 style={{ position: 'absolute', bottom: "20px", left: "20px" }}>test</h1>
        //                 <img
        //                     src={`${elt.track.album.images[0].url}?w=248&fit=crop&auto=format`}
        //                     srcSet={`${elt.track.album.images[0].url}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //                     alt={elt.title}
        //                     loading="lazy"
        //                 />
        //             </ImageListItem>
        //         ))}
        //     </ImageList>
        // </Box>
    );
}

export default ContentSearch;