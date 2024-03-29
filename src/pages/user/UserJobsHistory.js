import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardElement from '../../components/CardElement';

const UserJobsHistory = () => {
    const { user } =  (useSelector( (state) => state.userProfile )) ;

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#fafafa" }} > Jobs History</Typography>
                <Box>
                    {
                        user && user.jobHistory.map((history,i) =>(
                            <CardElement 
                            key = {i}
                            id = {history._id}
                            jobTitle={history.title}
                            description={history.description}
                            category=''
                            location={history.location}
                            />
                        ))

                        // <Typography>{user}</Typography>
                    }
                </Box>
            </Box>
        </>
    )
}

export default UserJobsHistory