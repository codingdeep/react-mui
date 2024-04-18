import React from 'react';
import {Product} from "../../types/types";
import {Grid, Typography, Card, CardMedia, CardContent, CardActions, Button} from "@mui/material";

interface ProductItemProps {
    product: Product
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
    const {title, description, thumbnail} = product;
    return (
        <Grid item>
            <Card sx={{maxWidth: 328}}>
                <CardMedia
                    sx={{height: 250}}
                    image={thumbnail}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add To Cart</Button>
                    <Button size="small">View Details</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default ProductItem;