import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'

const Navbar = ({user, loggedIn, logout}) => {
    let isAdmin = false;
    if(user.roles.includes("admin") ){
        isAdmin = true;
    }
    return (
        <>
            <PrimaryNav>
                <Hamburger/>
                <Menu>
                    {loggedIn &&
                        <MenuLink to="/bookings" ativestyle="true">
                            Bookings
                        </MenuLink>
                    }

                    {loggedIn &&
                        <MenuLink to="/assistants" ativestyle="true">
                            Assistants
                        </MenuLink>
                    }

                    {loggedIn && isAdmin &&
                        <MenuLink to="/createAssistant" ativestyle="true">
                            create assistant
                        </MenuLink>
                    }
                                     
                    
                    {loggedIn ? (<MenuLink to="/" ativestyle="true" onClick={logout}> Logout </MenuLink> ) : (<MenuLink to="/login" ativestyle="true"> Login </MenuLink>)}

                   
                </Menu>
            </PrimaryNav>
        </>
  )
}
export default Navbar