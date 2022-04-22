import { MenuItem, TextField } from "@mui/material";

const Home = () => {
    return(
        <div>
            Home page
         
            <div>
                <span style={{fontSize: 40}}>
                    Settings
                </span>
                <div>
                    <TextField
                    select
                    label="Choose a category"
                    variant="outlined"
                    style={{marginBottom: 30}}
                    >
                        {
                         Categories.map((cat) => (
                         <MenuItem key={cat.category} value={cat.value}>
                             {cat.category}
                         </MenuItem>
                        ))}
                        <MenuItem></MenuItem>
                    </TextField>
                    <TextField
                    select
                    label="Select Difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    variant="outlined"
                    style={{ marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy">
                        Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                        Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                        Hard
                        </MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;