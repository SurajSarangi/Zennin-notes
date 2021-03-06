import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    outline: {
        border : (note) => {
            if(note.category === "web development") {
                return '1px solid red'
            } else if(note.category === "machine learning") {
                return '1px solid #64ffda'
            } else if(note.category === "valorant") {
                return '1px solid #d4e157'
            } else {
                return '1px solid #311b92'
            }
        }
    },
    avatar: {
        background: (note) => {
            if(note.category === "web development") {
                return 'red'
            } else if(note.category === "machine learning") {
                return '#64ffda'
            } else if(note.category === "valorant") {
                return '#d4e157'
            } else {
                return '#311b92'
            }
        }
    },
    heading: {
        fontFamily : 'Lobster'
    }
})

const NoteCard = ({ element, handleDelete }) => {

    const classes = useStyles(element);

    return ( 
        <div>
            <Card elevation={1} className={classes.outline}>
                <CardHeader 
                    avatar = {
                        <Avatar className={classes.avatar}>
                            { element.category[0].toUpperCase() }
                        </Avatar>
                    }
                    action = {
                        <IconButton onClick={() => handleDelete(element.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title = {
                        <Typography variant="subtitle1" className={classes.heading}>
                            { element.title }
                        </Typography>
                    }
                    subheader = { element.category }
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" >
                        { element.note }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
 
export default NoteCard;