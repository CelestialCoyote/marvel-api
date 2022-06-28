import { StyledHeader } from './Header.styled'


const Header = ({ title }) => {

    return (
        <StyledHeader>
            {title}
        </StyledHeader>
    );
};


export default Header;
