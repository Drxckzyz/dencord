import Client from "../../Client.ts";
import ClientUser from "../../ClientUser.ts";
import { Events } from "../../../constants/Events.ts";
import { Payload } from "../../../constants/interfaces/Payload.ts";
import Guild from "../../../models/Guild.ts";
import Role from "../../../models/Role.ts";
import RestApiHandler from '../../Rest/RestApiHAndler.ts'


export default async function(client: Client, payload: Payload) {
    const { user, guilds } = payload.d; 
    //console.log(payload)
    client.user = new ClientUser(
        user.username,
        user.discriminator,
        user.verified,
        user.id,
        user.flags,
        user.email,
        user.bot,
        user.avatar,
    );

    const now = performance.now();
    
    
   
    for (const guild of guilds) {
        const { id }  = guild

        const g = await RestApiHandler.fetchGuild(client.token, id);
       

        const rolesArray = g.roles;
        const roles = new Map();
        for (const role of rolesArray){
            roles.set(role.id, new Role(
                role.id,
                role.name,
                role.color,
                role.hoist,
                role.poistion,
                role.permissions,
                role.mentionable,
                role.managed,
            ));
        }

        const newGuild = new Guild(
            g.id,
            g.name,
            g.icon,
            g.description,
            g.splah,
            g.discovery_splash,
            g.features,
            g.emojis,
            g.banner,
            g.owner_id,
            g.application_id,
            g.region,
            g.afk_channel_id,
            g.afk_timeout,
            g.system_channel_id,
            g.widget_enabled,
            g.widget_channel_id,
            g.verification_level,
            roles,
            g.default_message_notifications,
            g.mfa_level,
            g.explicit_content_filter,
            g.max_presences,
            g.max_members,
            g.max_video_channel_users,
            g.vanity_url_code,
            g.premium_tier,
            g.premium_subscription_count,
            g.system_channel_flags,
            g.preferred_locale,
            g.rules_channel_id,
            g.public_updates_channel_id,
        );
        client.guilds.set(newGuild.id, newGuild);
    }
    const end = performance.now();
    console.log(`Duration: ${end-now}ms`);
    //console.log(client.guilds);
    await RestApiHandler.CreateSlashCommand('test', 'hi', {}, 3, true, client.user.id, client.token);
    client.emit(Events.READY); 
}