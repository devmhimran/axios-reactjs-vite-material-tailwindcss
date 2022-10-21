import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const NewsAllData = ({ data }) => {
  const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } = data;
  return (

    <Card>
      <CardHeader floated={false}>
        <img src={newsPreviewImage} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {newsTitle}
        </Typography>
        <Typography>
          {newsDescription.slice(0, 120)}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex justify-center gap-7 pt-2">
        <Typography variant="small" className="capitalize"><span className='font-semibold'>Category:</span> {newsCategory}</Typography>
      </CardFooter>
    </Card>
    // <Card className="my-6 lg:">
    //   <CardHeader floated={false} className="h-80">
    //     <img src={newsPreviewImage} alt="profile-picture" />
    //   </CardHeader>
    //   <CardBody className="text-center">
    //     <Typography variant="h5" className="mb-2">
    //       {newsTitle}
    //     </Typography>
    //     <Typography>
    //       {newsDescription.slice(0, 120)}
    //     </Typography>
    //   </CardBody>
    //   <CardFooter divider className="flex items-center justify-between py-3">
    //     <Typography variant="small" className='font-medium'>Category: {newsCategory}</Typography>
    //   </CardFooter>
    // </Card>
  );
};

export default NewsAllData;