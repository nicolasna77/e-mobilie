import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Profil() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: { xs: "block", sm: "flex" },
      }}
    >
      <Box sx={{ height: "100vh", display: { xs: "none", sm: "flex" } }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            icon={<PersonIcon fontSize="small" />}
            iconPosition="start"
            label="Mon Profil"
            {...a11yProps(0)}
          />
          <Tab
            icon={<ArticleIcon fontSize="small" />}
            iconPosition="start"
            label="Mes commandes"
            {...a11yProps(1)}
          />
          <Tab
            icon={<FavoriteIcon fontSize="small" />}
            iconPosition="start"
            label="Mes Favoris"
            {...a11yProps(2)}
          />
          <Tab
            icon={<IosShareIcon fontSize="small" />}
            iconPosition="start"
            label="Admin"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>

      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <Tabs
          orientation="horizontal"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs Profil"
          sx={{ borderRight: 1, borderColor: "divider", display: "inline" }}
        >
          <Tab
            icon={<PersonIcon fontSize="small" />}
            iconPosition="start"
            label="Mon Profil"
            {...a11yProps(0)}
          />
          <Tab
            icon={<ArticleIcon fontSize="small" />}
            iconPosition="start"
            label="Mes commandes"
            {...a11yProps(1)}
          />
          <Tab
            icon={<FavoriteIcon fontSize="small" />}
            iconPosition="start"
            label="Mes Favoris"
            {...a11yProps(2)}
          />
          <Tab
            icon={<IosShareIcon fontSize="small" />}
            iconPosition="start"
            label="Admin"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Paper color="secondary" elevation={1}>
          <span>
            <Avatar> </Avatar>
            <Typography> Nicolas Abreu</Typography>
          </span>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
