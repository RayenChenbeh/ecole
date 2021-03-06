import React,{ useState, useEffect} from "react";
import {useParams } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/ClassesTable/ClassesTable.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Classes.css'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);



export default function TableList() {
  const [nosClasses, setNosClasses]=useState([])
  const [isLoaded, setIsLoaded]= useState(false)

  const [open, setOpen] = React.useState(false);

  const [niveau, setNiveau] = React.useState();
  const [nombre, setNombre] = useState()
  const [nom, setNom] = useState()
  const [annee, setAnnee]  = useState()
  const [msg, setMsg] = useState("")

  const handleChange = (event) => {
    setNiveau(event.target.value);
  };

  const handleClickOpen = () => {
      setOpen(true);
 };

 const handleClose = () => {
      setNombre()
      setAnnee()
      setNiveau()
      setMsg()
      setNom()
      setOpen(false);
  };
  

    useEffect(()=>{
    if(!isLoaded){
       console.log("loaded")
    fetch("http://localhost:4000/classes").then(response=>
      response.json()
    ).then(data=>{
      setIsLoaded(true)
      setNosClasses(data)
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
  }},[nosClasses])

  const handleAdd = () =>{
    if (!nom || !nombre || !annee || !niveau){
      setMsg("Vous devez remplir tous les champs")}
    else{
      setMsg("")
    fetch(`http://localhost:4000/classes`,{
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
        },
      
      body: JSON.stringify({nom:nom, niveau: niveau, nb_eleve: nombre, ann??e:annee}),
    withCredentials: true,
    })
      .then(()=> {
        window.location.reload()
    })

  }
  
}

  const classes = useStyles();
  return (
    <div>
    
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Classes</h4>
            
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Niveau", "Nom", "Nombre d'??l??ves", "Ann??e scolaire", "", ""]}
              tableData={nosClasses}
            />
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>
      <Tooltip title="Ajouter" aria-label="Ajouter"  onClick={handleClickOpen}>
      <Fab color="secondary" className={classes.absolute} style={{float:"right", backgroundColor:"#8e24aa"}}>
        <AddIcon/>
      </Fab>
    </Tooltip>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nouvelle classe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Donnez les informations suivantes pour ajouter une nouvelle classe
          </DialogContentText>
          <FormControl required className={classes.formControl} style={{width:"20%", margin:"3%"}}>

          <InputLabel id="demo-simple-select-label">Niveau</InputLabel>
          <Select
          native
          value={niveau}
          onChange={handleChange}
          name="niveau"
          inputProps={{
            id: 'niveau-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </Select>
        </FormControl>
        
        <TextField
            value={nombre}
            margin="dense"
            id="filled-error"
            label="Nombre des ??l??ves"
            required
            fullWidth
            onChange={(e)=>setNombre(e.target.value)}
            style={{width:"30%", margin:"3%"}}
          />

          <TextField
            required
            value={annee}
            margin="dense"
            id="nombre"
            label="Ann??e scolaire"
            fullWidth
            onChange={(e)=>setAnnee(e.target.value)}
            style={{width:"30%", margin:"3%"}}
          />

          <TextField
            required
            value={nom}
            margin="dense"
            id="name"
            label="Nom de la classe"
            fullWidth
            style={{width:"40%" , margin:"3%"}}
            onChange={(e)=>setNom(e.target.value)}
         />

          
        </DialogContent>
        <div>
        <div className="msg">{msg}</div>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleAdd} color="primary">
            Enregistrer
          </Button>
        </DialogActions>

        </div>
      </Dialog>
    </div>

     )
}
