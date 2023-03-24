<?php

namespace App\Helper;

class GUID
{

    public static function Generate()
    {
        if (function_exists('com_create_guid') === true) {
            return trim(com_create_guid(), '{}');
        }

        // 1998942F-18A6-43D7-A6CC-DF5C0814C018
        // 4d38dbff-e745-43c1-96ae-67ba523f04a9

        return sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
    }
}
