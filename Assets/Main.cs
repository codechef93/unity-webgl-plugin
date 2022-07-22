using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;

public class Main : MonoBehaviour
{
    public Text m_UserToken;
    public Text m_TableId;

    [DllImport("__Internal")]
    public static extern string GetUserToken();
    [DllImport("__Internal")]
    public static extern string GetTableID();
    [DllImport("__Internal")]
    public static extern void RedirectTo(string url);

    public void On_ReadParams_Clicked()
    {
        m_UserToken.text = "UserToken = " + GetUserToken();
        m_TableId.text = "TableId = " + GetTableID();
    }

    public void On_Leave_Clicked()
    {
        RedirectTo("http://localhost/game");
    }
}
