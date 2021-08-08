import React,{ useState, useEffect} from "react";
import {useParams } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardFooter from "../../components/Card/CardFooter.js";

import avatar from "../../assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);



export default function UserProfile() {
  const classes = useStyles();

  const [newfamilyname, setnewfamilyname] = useState("");
  const [newfirstname, setnewfirstname] = useState("")
  const [newemail, setnewemail] = useState("")
  const [newpassword, senewtpassword] = useState("")

  const updateAdministrateur = (id) => {
    Axios.put("http://localhost:4000/update",{ 
      id: id ,
      newfamilyname: newfamilyname,
      newfirstname: newfirstname,
      newemail: newemail,
      newpassword: newpassword,
    });
  };


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h3 className={classes.cardTitleWhite}>Profil de l'Administrateur</h3>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Nom"
                    id="firstname"
                    onChange={(e)=>setnewfirstname(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Prénom"
                    id="familyname"
                    onChange={(e)=>setnewfamilyname(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Adresse E-mail"
                    id="email"
                    onChange={(e)=>setnewemail(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Mot De Passe "
                    id="password"
                    onChange={(e)=>senewtpassword(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              <GridContainer>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => updateAdministrateur()}>Modifier Le Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
