import { useContext, useState } from "react";
import { AuthenticationData } from "../contexts/Authentication";

export function Interface () {
    const { user } = useContext(AuthenticationData);
    const [copied, setCopied] = useState(false);

    async function CopyUUID () {
        await navigator.clipboard.writeText(user.uuid);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 500);
    }

    return user ? (
        <div className="div4">
            <div className="mainGrid4-box">
                <div className="mainGrid4x1">

                    <img src="/DefaultProfile.png" />
                    <div className="mainGrid4x1-status active"></div>

                </div>
                <div className="mainGrid4x2">

                    <div className="mainGrid-title">USERNAME</div>
                    <div className="mainGrid-box">@{user.username}</div>

                </div>
                <div className="mainGrid4x3">

                    <div className="mainGrid-title">JOINED AT</div>
                    <div className="mainGrid-box">{user.joinedAt}</div>

                </div>
                <button className="mainGrid4x4" onClick={() => CopyUUID()}>{copied ? "Copied" : "Copy UUID"}</button>
            </div>
        </div>
    ) : null;
}

export default Interface